'use client';
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function CreateNote() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const router = useRouter();

	const create = () => {
		fetch('http://127.0.0.1:8090/api/collections/notes/records', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				content,
			}),
		}).then((_) => {
			setTitle('');
			setContent('');
			router.refresh();
		});

	}

	return (
		<form onSubmit={create}>
			<h3>Time to unleash your inner note-taking ninja! Tap that 'New Note' button and let's conquer your thoughts
				with style!</h3>
			<div>
				<input
					type="text"
					placeholder="Title f.e. 'Work'"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					placeholder="Content f.e. 'To call Dwight at 12 a.m.'"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<button type="submit">
					New Note
				</button>
			</div>
		</form>
	)
}