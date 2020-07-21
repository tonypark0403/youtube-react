import React, { useState } from 'react';

const Upload = () => {
  const fileRef = useState(React.createRef());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log({
      title,
      description,
      file: fileRef.current.files[0],
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
    }
  };
  return (
    <div className="form-container">
      <form action={`/videos/upload`} onSubmit={handleSubmit}>
        <label htmlFor="file">Video File</label>
        <input
          type="file"
          id="file"
          name="file"
          ref={fileRef}
          accept="video/*"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        >
          {description}
        </textarea>
        <input type="submit" value="Update Video" />
      </form>
    </div>
  );
};

export default Upload;
