# chmod u+x ...

if [ "reactadmin" ]

    echo "正在删除前端文件……"

    rm -rf reactadmin

then

    echo "正在更新前端远程仓库代码……"

fi

npm run clone


cd ./reactadmin

echo "下载前端依赖……"
npm i

echo "前端文件打包……"
npm run build

mv ./reactadmin/build/* ./public

npm run start

echo "服务器启动成功！👌"