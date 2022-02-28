import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Barding() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                {random(gender[Math.floor(Math.random() * 2)])}
            </h1>
            <h2>({features.sort(() => 0.5 - Math.random()).slice(0, 2).join(", ")})</h2>
            <Link href="/">
                <a><h2>Back</h2></a>
            </Link>
        </main>
    )
}

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const males = [
    "Aegir", "Arn", "Brandulf", "Domarr", "Egil", "Erland", "Farald",
    "Finn", "Gautarr", "Hafgrim", "Hjalmar", "Ingolf", "Jofur",
    "Kolbeinn", "Leiknir", "Lomund", "Munan", "Nari", "Nefstan",
    "Ottarr", "Ragnarr", "Reinald", "Sigmarr", "Steinarr", "Thorald",
    "Torwald", "Ulfarr", "Unnarr", "Vandil", "Varinn"
]

const females = [
    "Aldis", "Asfrid", "Bera", "Bergdis", "Dagmar", "Eilif", "Erna",
    "Frida", "Geira", "Gudrun", "Halla", "Hild", "Ingirun", "Ingrith",
    "Lif", "Linhild", "Kelda", "Runa", "Saldis", "Sigga", "Sigrun",
    "Thora", "Thordis", "Thorhild", "Ulfhild", "Ulfrun", "Una",
    "Valdis", "Vigdis", "Walda"
]

const gender = [males, females]

const features = [
    "Bold", "Eager", "Fair", "Fierce", "Generous", "Proud", "Tall", "Wilful"
]