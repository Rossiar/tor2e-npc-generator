import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Dwarves() {
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
    "Ai", "Anar", "Beli", "Bláin", "Borin", "Burin", "Bruni", "Farin", "Flói",
    "Frár", "Frerin", "Frór", "Ginar", "Gróin", "Grór", "Hanar", "Hepti",
    "Iari", "Lófar", "Lóni", "Náli", "Nár", "Niping", "Nói", "Núr", "Nýrád",
    "Ónar", "Póri", "Regin", "Svior", "Veig", "Vidar"
]

const females = [
    "Adís", "Afrid", "Agda", "Bersa", "Birna", "Dagrún", "Dís", "Drífa",
    "Edda", "Elin", "Fenja", "Frida", "Geira", "Gísla", "Hadda", "Hón",
    "Ida", "Ilmr", "Jóra", "Kára", "Kóna", "Líf", "Línhild", "Már", "Mist",
    "Nál", "Oda", "Ósk", "Rán", "Rinda", "Sefa", "Syn", "Tóra", "Trana",
    "Úlfrún", "Vírún", "Yrr"
]

const gender = [males, females]

const features = [
    "Cunning", "Fierce", "Lordly", "Proud", "Secretive", "Stern", "Wary", "Wilful"
]