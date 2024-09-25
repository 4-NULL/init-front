// server.js
import express from 'express';
import { join, resolve } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// 빌드된 정적 파일을 제공
app.use(express.static(join("./", 'dist')));

// 모든 경로를 index.html로 리다이렉트 (SPA 설정)
app.get('*', (req, res) => {
  res.sendFile(resolve("./", 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
