# Archiver - NT208 project

Web archiving is the process of collecting portions of the World Wide Web to ensure the information is preserved in an archive for future researchers, historians, and the public.

**Archiver** is a simple project that let users archive a website, and view previously taken web snapshots.

## Key features
- Dead simple. Just paste your URL and let it handle the rest.
- Optionally crawl and archive the whole website.
- Snapshots are saved as ISO standard WARC format.
- ...?

## Usage
### Guest users
Just simply paste your URL and press "Go".
- If that URL is already in our database, you will be prompted to select which snapshot you want to view.
- If not, the app will then start archiving that website. You will be redirected to the result after it's done archiving.
Guest users are allowed to make 3 archiving requests a day, and view 10 web snapshots a day.

### Registered users
Registered users enjoys the same functionality as guest users, plus:
- Unlimited archiving requests and snapshot view times.
- Bookmark your favorite snapshots.

## Project structure
This project contains 2 components: `Frontend` and `Backend`.
### Frontend
Written using:
- React.js
- Tailwind CSS
- Axios
The frontend is where the user will interact with, and handles talking with backend infrastructure to request actions/fetch data.

### Backend
Written using:
- Flask (Python)
- [pywb](https://github.com/webrecorder/pywb)
- MySQL
The backend will host the app's APIs and main functionalities, such as crawling websites, archiving and retrieving snapshots.

## API interface
#### /auth/login
Params: `username` (str), `password` (str)  
Return:
```
{"success": false, "reason": "Wrong username or password."}
{"success": true, "sessionid": "AAAAbbbbCCCC11112222eeee"}
```

#### /auth/getsession
Params: `sessionid`

#### /auth/logout
Params: `sessionid`

#### /archive/isarchived
Params: `sessionid`, `url`  
Return: `state` = ( `not_archived`, `archiving`, `archived` )

#### /archive/doarchive
Params: `sessionid`, `url`  

#### /archive/list
Params: `sessionid`, `url`  
Return:
```
list: [  
  id: "name",
  1: "2023-12-02",  
  2: "2024-03-14",  
  ....  
]
```

#### /archive/view

#### /bookmark/recent

#### /bookmark/add

#### /bookmark/list




