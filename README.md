# Node Tesseract CLI
###### Nathan Iarve
---

This is a command line tool that performs Optical Character Recognition on png/jpg files.

It uses the following technologies:
* Node
* Tesseract (for OCR)

---
#### Installation
First, install brew
Then:
```sh
  $ brew install tesseract --with-all-languages
  $ git clone https://github.com/niarve/node-tesseract-cli.git
  $ cd node-tesseract-cli
  $ npm i -g
```

---
#### Performing an OCR
To run an OCR on your image:
```sh
  $ ocr path/to/your/file.png
```

To output to a text file use the redirection operator:
```sh
  $ ocr path/to/your/file.jpg >> output.txt
```

I left some pictures in the assets folder for testing purposes, but I encourage you to use your own!

---
#### Limitations
Tesseract is great for simple OCR with easy-to-read text, but there's some limitations. This CLI cannot recognize:
* Cursive
* Sidways/Diagonal text

You can test these limitations with files included in the assets folder.
