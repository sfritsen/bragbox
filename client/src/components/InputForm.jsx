import React, { useState } from 'react';

const InputForm = () => {

    const [title, setTitle] = useState('');
    const [brag, setBrag] = useState('');

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { title, brag };
			await fetch('http://localhost:5000/brags', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			window.location = '/';
		} catch (err) {
			console.error(err.message);
		}
	};

    return (
        <form className="input_form" onSubmit={onSubmitForm}>
            <label for="title">Title</label>
            <input type="text" id="title" className="form_element" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label for="brag">Brag Details</label>
            <textarea id="brag" col="6" rows="14" className="form_element" onChange={(e) => setBrag(e.target.value)} value={brag}></textarea>

            <button class="btn">Submit</button>
        </form>
    );
};

export default InputForm;