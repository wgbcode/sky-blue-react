yarn build &&
cd build &&
git init &&
git add -A &&
git commit -m deploy &&
git remote add origin git@github.com:wgbcode/sky-blue-react.git && 
git push -uf origin master:gh-pages &&  // 强制部署到分支
cd -
