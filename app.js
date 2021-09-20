const path = require('path');
const { join } = path;
const { readdirSync, renameSync } = require('fs');
//files directory cmd line argument
const [fileDir] = process.argv.slice(2);
//file extension cmd line argument
const [fileExt] = process.argv.slice(3);
//files to be replaced
const files = readdirSync(fileDir);

//filenames you want to replace to the files
const arrFileNames = ['renamesample',
    'bruhname',
    'samplerename',
]

const fileExtTypes = [
    "aiff",
    "aif",
    "au",
    "avi",
    "bat",
    "bmp",
    "class",
    "java",
    "csv",
    "cvs",
    "dbf",
    "dif",
    "doc",
    "docx",
    "eps",
    "exe",
    "fm3",
    "gif",
    "hqx",
    "htm",
    "html",
    "jpg",
    "jpeg",
    "mac",
    "map",
    "mdb",
    "mid",
    "midi",
    "mov",
    "qt",
    "mtb",
    "mtw",
    "pdf",
    "p65 .t65",
    "png",
    "ppt",
    "pptx",
    "psd",
    "psp",
    "qxd",
    "ra",
    "rtf",
    "sit",
    "tar",
    "tif",
    "txt",
    "wav",
    "wk3",
    "wks",
    "wpd",
    "wp5",
    "xls",
    "xlsx",
    "zip"
]

for (var i = 0; i < files.length; i++) {

    //if the files that has been read on the directory is greater than the filenames array    
    if (arrFileNames.length > i) {

        //get the file extension
        const ext = files[i].substring(files[i].lastIndexOf('.') + 1);
        const extNameOfFileName = arrFileNames[i].substring(arrFileNames[i].lastIndexOf('.') + 1);

        var oldPath = "",
            newFilePath = "";
        if (fileExt == ext) {

            //if one or all of the given filenames on the array is not on the fileExtTypes
            //then give it a file extension that has been passed from the command line argument
            if (fileExtTypes.indexOf(extNameOfFileName) != -1) {

                oldPath = fileDir + "/" + files[i];
                newFilePath = join(fileDir, arrFileNames[i]);
            } else {

                oldPath = fileDir + "/" + files[i];
                newFilePath = join(fileDir, arrFileNames[i] + "." + fileExt);
            }

            //rename it
            renameSync(oldPath, newFilePath);
        } else {
            console.log(`The extension ${fileExt} you provided is not the same with expected file extension ${ext}`)
        }
    } else {
        console.log(`The files the has been read on the directory has length of ${files.length} and the filenames array length is ${arrFileNames.length}`)
    }



}