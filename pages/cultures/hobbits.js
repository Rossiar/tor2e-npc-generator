import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Hobbits() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                {random(gender[Math.floor(Math.random() * 2)])} {random(family)}
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
    "Andwise", "Berilac", "Bungo", "Cottar", "Doderic", "Dudo",
    "Erling", "Fastred", "Ferumbras", "Folco", "Gorhendad",
    "Griffo", "Halfred", "Hamson", "Ilberic", "Isembold", "Isengar",
    "Longo", "Marmadas", "Marroc", "Mungo", "Odo", "Orgulas",
    "Otho", "Posco", "Reginard", "Robin", "Rudigar", "Sadoc",
    "Saradas", "Tobold", "Tolman"
]

const females = [
    "Adaldrida", "Amaranth", "Asphodel", "Belba", "Bell",
    "Berylla", "Camellia", "Daisy", "Eglantine", "Estella", "Gilly",
    "Hanna", "Lily", "Malva", "Marigold", "May", "Melilot",
    "Menegilda", "Mentha", "Mirabella", "Myrtle", "Pearl",
    "Peony", "Pervinca", "Pimpernel", "Primrose", "Primula",
    "Prisca", "Rosamunda", "Ruby", "Salvia"
]

const family = [
    "Baggins", "Boffin", "Bolger", "Bracegirdle", "Brandybuck",
    "Brown", "Brownlock", "Bunce", "Burrows", "Cotton",
    "Gamgee", "Gardner", "Goldworthy", "Goodbody",
    "Goodchild", "Grubb", "Headstrong", "Hornblower",
    "Maggot", "Noakes", "North-­tooks", "Proudfoot",
    "Puddifoot", "Roper", "Rumble", "Sackville", "Smallburrow",
    "Took", "Twofoot", "Whitfoot"
]

const gender = [males, females]

const features = [
    "Eager", "Fair-­spoken", "Faithful", "Honourable", "Inquisitive", "Keen-­eyed", "Merry", "Rustic"
]