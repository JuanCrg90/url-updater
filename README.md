# url-updater CLI

## Motivation
I regularly need to update URL's in multiple HTML and XML documents. this has become a repetitive work, so I decided to create a script which takes a group of files and update the url indicated with a new url. The script supports single file, directory and zip files.

## Instalation

```bash
$ npm install -g url-updater
```

## Usage

Update Single file:
```bash
$ url-updater -s http://site-to-search.com -r http://new-site.com file.html
```

Update Directory
```bash
$ url-updater -s http://site-to-search.com -r http://new-site.com directory
```
Update Zip File
```bash
$ url-updater -s http://site-to-search.com -r http://new-site.com ZipFile.zip
```

Update Only *href*
```bash
$ url-updater -s href="http://site-to-search.com -r href="http://new-site.com ZipFile.zip
```

Update Only *href XML* files
```bash
$ url-updater -s href=&quot;http://site-to-search.com -r href=&quot;http://new-site.com ZipFile.zip
```

## TODO
- [  ] Write test cases
- [  ] Add Coverage
- [  ] Improve error Messages
- [  ] Improve support for XML files
- [  ] Add Option to overwrite the original zip
- [  ] Improve Support for href update
