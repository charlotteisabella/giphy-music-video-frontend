import React from 'react';
import axios from 'axios';
import { Form, TextInput } from 'a-plus-forms';

const sendToBackend = (stuff) =>
  axios.post('http://localhost:8000', { params: stuff });

// const schema = {
//   type: 'object',
//   properties: {
//     title: 'string',
//     artist: 'string',
//   },
//   required: ['title', 'artist']
// }

const SongForm = () =>
  <Form onSubmit={sendToBackend}>
    <TextInput name="title" placeholder="Input song title" />
    <TextInput name="artist" placeholder="Input artist name" />
    <button type="submit">Submit</button>
  </Form>

export default SongForm;
