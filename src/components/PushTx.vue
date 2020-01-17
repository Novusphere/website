<template>
  <div class="container">
    <div class="text-center">
        <h1>This page has temporarily been disabled as we undergo some changes with phase 1 ATMOSD</h1>
    </div>
    <div class="row" v-if="false">
        <div class="col-md-8">
            <h1>Wallet</h1>
            <form>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Endpoint</label>
                    <div class="col-sm-10">
                        <input readonly type="text" class="form-control" v-model="endpoint">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Private Key</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="wif" placeholder="WIF">
                    </div>
                    <div class="col-sm-2">
                        <button type="button" class="btn btn-primary" v-on:click="generateWIF()">Generate</button>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-8">
                        <input readonly type="text" class="form-control" v-model="address">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Balance</label>
                    <div class="col-sm-8">
                        <input readonly type="text" class="form-control" v-model="balance">
                    </div>
                    <div class="col-sm-2">
                        <button type="button" class="btn btn-primary" v-on:click="faucet()">Faucet</button>
                    </div>
                </div>
            </form>
            <h1>Transfer</h1>
                <form>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">To (address)</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="transfer.to" placeholder="address">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Amount</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="transfer.amount" placeholder="amount">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                        <button type="button" class="btn btn-primary" v-on:click="generateTransfer()">Generate Tx</button>
                    </div>
                </div>
            </form>
            <div v-if="false">
                <h1>Mint</h1>
                <form>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Amount</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" v-model="mint.amount" placeholder="WIF">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                            <button type="button" class="btn btn-primary" v-on:click="generateMint()">Generate Tx</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-4">
            <h1>Raw Transaction</h1>
            <form>
                <div class="form-group row">
                    <div class="col-sm-12">
                        <textarea class="form-control" rows="20" v-model="txPayload"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-12">
                        <button type="button" class="btn btn-primary" v-on:click="pushTx()">Push via Scatter</button>
                        <button type="button" class="btn btn-success" v-on:click="pushTxService()">Push via Service</button>
                    </div>
                </div>
                <div class="form-group row" v-if="txId">
                        <label class="col-sm-2 col-form-label">TxID</label>
                    <div class="col-sm-10" style="word-wrap: break-word;">
                            <a class="col-form-label" target="_blank" :href="'https://bloks.io/transaction/' + txId">
                                {{ txId }}
                            </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery";
import { GetScatterIdentity, GetEOS, GetScatter } from "../eos.js";
import bitcoin from "bitcoinjs-lib";
import { GetNovusphere, NovusphereConfig } from "../novusphere.js";

const EOS_SERVICE_EP = 'https://eos-service.novusphere.io';


window._bitcoin = bitcoin;

export default {
  name: "PushTx",
  async mounted() {
    await this.setBalance();
  },
  methods: {
    amount_to_coin64(amount) {
      return parseInt(parseFloat(amount) * 100000000);
    },
    pushTxService() {
        this.txId = '';

        jQuery.post(EOS_SERVICE_EP + '/atmosd/pushtx', {msg: this.txPayload}, (result) => {
            if (result.error) {
                alert(result.error);
            }
            else {
                console.log(result);
                this.txPayload = '';
                this.txId = result.transaction_id;
                alert('transaction sent');
            }
        });
    },
    faucet() {
        this.txId = '';

        var data = JSON.stringify({address: this.address});
        jQuery.post(EOS_SERVICE_EP + '/atmosd/faucet', {msg: data}, (result) => {
                if (result.error) {
                    alert(result.error);
                }
                else {
                    console.log(result);
                    this.txPayload = '';
                    this.txId = result.transaction_id;
                    alert('claimed from faucet, please wait a moment and your balance should update');
                }
            });
    },
    generateWIF() {
      var keyPair = bitcoin.ECPair.makeRandom();
      this.wif = keyPair.toWIF();
    },
    generateTransfer() {
      try {
        bitcoin.address.fromBase58Check(this.transfer.to);
      } catch (ex) {
        alert("Invalid to address!");
        return;
      }
      
      if (parseFloat(this.transfer.amount) > parseFloat(this.balance)) {
        alert("You are sending more coins than you have!");
        return;
      }

      var c64 = this.amount_to_coin64(this.transfer.amount);

      this.generateTx(
        "transfer",
        JSON.stringify({
          to: this.transfer.to,
          amount: c64
        })
      );
    },
    generateMint() {
      this.generateTx(
        "mint",
        JSON.stringify({
          amount: this.amount_to_coin64(this.mint.amount)
        })
      );
    },
    async getAccount(address) {
      if (!address) return undefined;

      var novusphere = GetNovusphere();
      var payload = (await novusphere.api({
        find: novusphere.config.collection,
        filter: {
          network: 1,
          address: address
        },
        maxTimeMS: 1000
      })).cursor.firstBatch[0];

      return payload;
    },
    async setBalance() {
      var account = await this.getAccount(this.address);
      this.balance = ((account ? account.balance : 0) / 100000000.0).toFixed(8);
      setTimeout(() => this.setBalance(), 3000);
    },
    async generateTx(op, data) {
      var account = await this.getAccount(this.address);

      var nonce = account ? account.nonce + 1 : 1;
      var opdata = op + data;
      var hashdata = new Uint8Array(8 + opdata.length);
      hashdata[0] = 1; // network
      hashdata[4] = nonce & 0xff;
      hashdata[5] = (nonce >> 8) & 0xff;
      hashdata[6] = (nonce >> 16) & 0xff;
      hashdata[7] = (nonce >> 24) & 0xff;

      for (var i = 0; i < opdata.length; i++)
        hashdata[8 + i] = opdata.charCodeAt(i);

      var hash = bitcoin.crypto.sha256(hashdata);

      /*function hashdata_str() {
            var s = '';
            for (var i = 0; i < hashdata.length; i++) {
                if (hashdata[i] < 0x0f)
                    s += '0';
                s += hashdata[i].toString(16);
            }
            return s;
        }

        console.log(opdata);
        console.log(hashdata_str());
        console.log(hash.toString('hex'));*/

      var key = bitcoin.ECPair.fromWIF(this.wif);
      var sig = key.sign(hash);
      var derSig = bitcoin.script.signature.encode(
        sig,
        bitcoin.Transaction.SIGHASH_ALL
      );

      var tx = {
        net: 1,
        key: key.publicKey.toString("hex"),
        sig: derSig.toString("hex"),
        op: op,
        data: data,
        nonce: nonce
      };

      this.txPayload = JSON.stringify(tx);
    },
    async pushTx() {
      this.txId = '';

      const scatter = await GetScatter();
      if (scatter == -1) {
          alert('Please install scatter!');
          return;
      }

      const identity = await GetScatterIdentity();
      const eos = GetEOS(scatter);

      var contract = await eos.contract("eosfilestore");
      var fnargs = { msg: this.txPayload };
      var eostx = await contract.transaction(tx => {
        tx.upload(fnargs, {
          authorization: [
            {
              actor: identity.account,
              permission: identity.auth
            }
          ]
        });
      });

      console.log(eostx);
      alert('transaction sent');
    }
  },
  watch: {
      endpoint() {
          NovusphereConfig.url = this.endpoint;
      }
  },
  computed: {
    address() {
      if (!this.wif) return "";

      var keyPair = bitcoin.ECPair.fromWIF(this.wif);
      var pkh = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
      return pkh.address;
    }
  },
  data() {
    return {
      txId: "",
      txPayload: "",
      wif: "",
      endpoint: NovusphereConfig.url,
      balance: 0,
      transfer: {
        to: "",
        amount: 0
      },
      mint: {
        amount: 100000000
      }
    };
  }
};
</script>