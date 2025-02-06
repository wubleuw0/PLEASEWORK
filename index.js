let DNAInput = document.getElementById("dnaInput");
let runButton = document.getElementById("runButton");
let RNAOut = document.getElementById("rnaOut");
let protienOut = document.getElementById("protienOut");

let KEY = {
    U: {
        U: {
            U: "PHE",
            C: "PHE",
            A: "LEU",
            G: "LEU"
        },
        C: {
            U: "SER",
            C: "SER",
            A: "SER",
            G: "SER"
        },
        A: {
            U: "TYR",
            C: "TYR",
            A: "STOP",
            G: "STOP"
        },
        G: {
            U: "CYS",
            C: "CYS",
            A: "STOP",
            G: "TRP"
        }
    },
    C: {
        U: {
            U: "LEU",
            C: "LEU",
            A: "LEU",
            G: "LEU"
        },
        C: {
            U: "PRO",
            C: "PRO",
            A: "PRO",
            G: "PRO"
        },
        A: {
            U: "HIS",
            C: "HIS",
            A: "GLN",
            G: "GLN"
        },
        G: {
            U: "ARG",
            C: "ARG",
            A: "ARG",
            G: "ARG"
        }
    },
    A: {
        U: {
            U: "ILE",
            C: "ILE",
            A: "ILE",
            G: "MET"
        },
        C: {
            U: "THR",
            C: "THR",
            A: "THR",
            G: "THR"
        },
        A: {
            U: "ASN",
            C: "ASN",
            A: "LYS",
            G: "LYS"
        },
        G: {
            U: "SER",
            C: "SER",
            A: "ARG",
            G: "ARG"
        }
    },
    G: {
        U: {
            U: "VAL",
            C: "VAL",
            A: "VAL",
            G: "VAL"
        },
        C: {
            U: "ALA",
            C: "ALA",
            A: "ALA",
            G: "ALA"
        },
        A: {
            U: "ASP",
            C: "ASP",
            A: "GLU",
            G: "GLU"
        },
        G: {
            U: "GLY",
            C: "GLY",
            A: "GLY",
            G: "GLY"
        }
    }
};

runButton.onclick = function convert(){
    let DNA = DNAInput.value;
    RNAOut.innerHTML = "";
    for(let i = 0; i <= (DNA.length - 1); i++){
        let char = DNA.charAt(i);
        switch(true){
            case char == "A":
                char = "U";
                break;
            case char == "T":
                char = "A";
                break;
            case char == "C":
                char = "G";
                break;
            case char == "G":
                char = "C";
                break;
            default:
                char = "";
                break;
        }
        RNAOut.innerHTML = `${RNAOut.innerHTML}${char}`;
        
    }
    let RNA = RNAOut.innerHTML;
    protienOut.innerHTML = "";
    for(let i = 1; i <= (RNA.length / 3); i++){
        let char1 = RNA.charAt(i * 3 - 3);
        let char2 = RNA.charAt(i * 3 - 2);
        let char3 = RNA.charAt(i * 3 - 1);

        let dash
        if(i != 1){
            dash = "-"
        }
        else{
            dash = ""
        }
        
        protienOut.innerHTML = `${protienOut.innerHTML}${dash}${KEY[char1][char2][char3]}`;
    }
};