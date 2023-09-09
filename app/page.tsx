import Image from 'next/image'
import catPic from '../public/notabuddy.jpg'
import styles from "@/app/notes/Notes.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.textCenter}>
			<Image
				className={styles.catImage}
				src={catPic}
				width={250}
				alt="cat"
				placeholder="blur"
			/>
			<h1>Meet the new and only, <b>NotaBuddy</b>!</h1>
			<p>Hey there, note-taking superstar! Welcome to <b>NotaBuddy</b>, your new best friend in the world of
				note-taking.<br/>
				We're not just any note-taking app; we're your trusty sidekick, your digital companion on the journey to
				productivity and organization. Imagine <b>us</b> as your personal note-taking cheerleader, but with a
				sense of
				humor that'll make you chuckle even when you're knee-deep in to-do lists and meeting notes.<br/>

				Why settle for boring notes when you can have a blast jotting down your thoughts, ideas, and reminders
				with <b>NotaBuddy</b>?<br/> We promise to make your note-taking experience as enjoyable as possible, with a
				sprinkle
				of wit and a dash of laughter. Whether you're in a meeting, attending a class, or simply brainstorming,
				we've got your back. So, dive into the world of <b>NotaBuddy</b>, where taking notes is no longer a
				chore but a
				delightful adventure. Let's embark on this note-taking journey together because, hey, life's too short
				for dull notes!</p>
			<h3>Don't let those brilliant ideas float away like lost balloons! Start using NotaBuddy today, and let's
				capture them for you.</h3>
			<Link className={styles.action} href={'/notes'}>Hop in to create a new note!</Link>
		</div>
	)
}
