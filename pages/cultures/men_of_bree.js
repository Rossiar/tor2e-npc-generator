import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function MenOfBree() {
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
    "Alfred", "Artie", "Bill", "Bob", "Carl", "Ed", "Fred", "Giles", "Herb", 
    "Larry", "Nob", "Oswald", "Percy", "Perry", "Sid", "Tom", "Harry"
]

const females = [
    "Daisy", "Emma", "Etta", "Fay", "Fern", "Flora", "Gert", "Holly", "Lily", 
    "Myrtle", "Poppy", "Rose", "Sage", "Tilly", "Violet"
]

const family = [
    "Appledore", "Asterfire", "Bellsap", "Briarcleave", 
    "Butterbur", "Cherryborn", "Chesterstout", "Droverwind", 
    "Ferny", "Foxglow", "Goatleaf", "Hardybough", 
    "Heathertoes", "Hedgedon", "Kettlegrass", "Lilyhawk", 
    "Mossburn", "Mugworts", "Oakstout", "Pickthorn", 
    "Pollenroad", "Rushlight", "Shrubrose", "Sweetroot", 
    "Thistlewool", "Wayward"
]

const gender = [males, females]

const features = [
    "Cunning", "Fair-­spoken", "Faithful", "Generous", "Inquisitive", "Patient", "Rustic", "True-­hearted"
]