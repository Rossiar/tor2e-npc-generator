import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Elves() {
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
    "Amras", "Aredhel", "Beleganor", "Belegon", "Calanhir",
    "Carmagor", "Dagorhir", "Durandir", "Edrahil", "Ellahir",
    "Fincalan", "Fuindor", "Galdagor", "Galdor", "Hallas",
    "Hirimlad", "Ithildir", "Lascalan", "Linaith", "Mablin",
    "Malanor", "Nauros", "Orgalad", "Pelegorn", "Sargon"
]

const females = [
    "Anórel", "Aranel", "Arbereth", "Baraniel", "Calanril",
    "Celebrindal", "Celenneth", "Elanor", "Elwing", "Eraniel",
    "Fimbrethil", "Gloredhel", "Idril", "Irilde", "Laurelin",
    "Lôrwend", "Lothíriel", "Meneloth", "Moriel", "Narieth",
    "Narniel", "Nimloth", "Nimrodel", "Níniel", "Tarandîs"
]

const gender = [males, females]

const features = [
    "Fair", "Keen-­eyed", "Lordly", "Merry", "Patient", "Subtle", "Swift", "Wary"
]