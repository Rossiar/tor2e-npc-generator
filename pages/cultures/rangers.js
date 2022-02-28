import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Rangers() {
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
    "Adrahil", "Amlaith", "Arvegil", "Baranor", "Belecthor",
    "Bergil", "Celepharn", "Cirion", "Damrod", "Dírhael",
    "Duinhir", "Egalmoth", "Eradan", "Findemir", "Forlong",
    "Golasdan", "Hallas", "Hirluin", "Ingold", "Iorlas", "Malvegil",
    "Ohtar", "Orodreth", "Tarannon", "Targon"
]

const females = [
    "Anwen", "Arbereth", "Berúthiel", "Baraniel", "Calanril",
    "Celenneth", "Elnîth", "Eraniel", "Finduilas", "Gilraen",
    "Gilraeth", "Gloredhel", "Idril", "Ioreth", "Ivorwen",
    "Lôrwend", "Lothíriel", "Luindîs", "Meneloth", "Moriel",
    "Morwen", "Narieth", "Narniel", "Orothêl", "Tarandîs"
]

const gender = [males, females]

const features = [
    "Bold", "Honourable", "Secretive", "Stern", "Subtle", "Swift", "Tall", "True-­hearted"
]