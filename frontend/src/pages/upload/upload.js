import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Upload = () => {
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('videoFile', file);
    formData.append('title', title);
    formData.append('description', description);
    axios.post('http://localhost:5000/videos/upload', formData).then(res => {
      if (res.data.status === 'ok') {
        setFile(null);
        setTitle('');
        setDescription('');
        history.push(`/videos/${res.data.data.videoId}`);
      }
    });
  };

  const handleChange = event => {
    const { name, value, files } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'file':
        setFile(files[0]);
        break;
      default:
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">Video File</label>
        <input
          type="file"
          id="file"
          name="file"
          files={[file]}
          accept="video/*"
          onChange={handleChange}
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
          value={description}
          required
        ></textarea>
        <input type="submit" value="Update Video" />
      </form>
    </div>
  );
};

export default Upload;
