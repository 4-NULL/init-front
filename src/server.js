// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 빌드된 정적 파일을 제공
app.use(express.static(path.join(__dirname, 'dist')));

// 모든 경로를 index.html로 리다이렉트 (SPA 설정)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
