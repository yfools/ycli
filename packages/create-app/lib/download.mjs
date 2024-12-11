import path from "path";
import download from "download-git-repo";

export default (dir) => {
  console.log(dir,'dir');
  dir.path = "preview";
  download(
    "github:yfools/ycli",
    path.join(process.cwd(), dir.path),
    {
      filter: (file) => {
        console.log(file,'file.....');
        return file.path==='packages\\webpack-react-ts-templete';
      },
    },
    (err) => {
      console.log(err);
    }
  );
};
