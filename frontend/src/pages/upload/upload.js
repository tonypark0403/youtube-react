import React from 'react';

const Upload = () => (
  <div className="form-container">
    <form action={`/videos/upload`} method="post">
      <label htmlFor="file">Video File</label>
      <input type="file" id="file" name="file" required />
      <input type="text" name="title" placeholder="Title" required />
      <textarea
        name="description"
        placeholder="Description"
        required
      ></textarea>
      <input type="submit" value="Update Video" />
    </form>
  </div>
);

export default Upload;
