import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Barding() {
    var d = data[gender[Math.floor(Math.random() * 2)]]
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                {random(d["names"])}, {d["relation"]} of {random(data["male"]["names"])}
            </h1>
            <h2>({data["features"].sort(() => 0.5 - Math.random()).slice(0, 2).join(", ")})</h2>
            <Link href="/">
                <a><h2>Back</h2></a>
            </Link>
        </main>
    )
}

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const data = {
    "female": {
        "relation": "daughter",
        "names": [
            "Aldis", "Asfrid", "Bera", "Bergdis", "Dagmar", "Eilif", "Erna",
            "Frida", "Geira", "Gudrun", "Halla", "Hild", "Ingirun", "Ingrith",
            "Lif", "Linhild", "Kelda", "Runa", "Saldis", "Sigga", "Sigrun",
            "Thora", "Thordis", "Thorhild", "Ulfhild", "Ulfrun", "Una",
            "Valdis", "Vigdis", "Walda"
        ]
    },
    "male": {
        "relation": "son",
        "names": [
            "Aegir", "Arn", "Brandulf", "Domarr", "Egil", "Erland", "Farald",
            "Finn", "Gautarr", "Hafgrim", "Hjalmar", "Ingolf", "Jofur",
            "Kolbeinn", "Leiknir", "Lomund", "Munan", "Nari", "Nefstan",
            "Ottarr", "Ragnarr", "Reinald", "Sigmarr", "Steinarr", "Thorald",
            "Torwald", "Ulfarr", "Unnarr", "Vandil", "Varinn"
        ],
    },
    "features": [
        "Bold", "Eager", "Fair", "Fierce", "Generous", "Proud", "Tall", "Wilful"    
    ]
}

const gender = ["male", "female"]