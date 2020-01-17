import Eos from 'eosjs'
import ScatterJS from 'scatter-js/dist/scatter.esm';

const ScatterConfig = {
    blockchain: "eos",
    host: "eos.greymass.com", // ( or null if endorsed chainId )
    port: "443", // ( or null if defaulting to 80 )
    chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906" // Or null to fetch automatically ( takes longer )
};

const ScatterEosOptions = {
    broadcast: true,
    sign: true,
    chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906" // Or null to fetch automatically ( takes longer )
};

var gScatter = null;

ScatterJS.scatter.connect("Put_Your_App_Name_Here").then(connected => {
    if(!connected) {
        // User does not have Scatter Desktop or Classic installed.
        gScatter = -1;
        return false;
    }
    
    // Use `scatter` normally now.
    gScatter = ScatterJS.scatter;
    window.scatter = null;
});

async function GetScatter() {
    return new Promise((resolve, reject) => {

        function checkScatter() {
            if (gScatter != null)
                resolve(gScatter);
            else
                setTimeout(checkScatter, 1000);
        }

        checkScatter();

    });
}

async function GetScatterIdentity() {
    var scatter = await GetScatter();
    var identity = await scatter.getIdentity({
        accounts: [
            {
                chainId: ScatterConfig.chainId,
                blockchain: ScatterConfig.blockchain
            }
        ]
    });

    return {
        account: identity.accounts[0].name,
        auth: identity.accounts[0].authority
    };
}

function GetEOS(scatter) {
    var eos = scatter.eos(ScatterConfig, Eos, ScatterEosOptions, 'https');
    return eos;
}

export { GetScatter, GetScatterIdentity, GetEOS };