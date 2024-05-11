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
This project contains 2 main components: `Frontend` and `Backend`.
### Frontend
Developed using:
- React.js
- Tailwind CSS
- Axios
The frontend is where the user will interact with, and handles talking with backend infrastructure to request actions/fetch data.

### Backend
Developed using:
- Flask (Python)
- MongoDB
- [SingleFile](https://github.com/gildas-lormeau/SingleFile)
The backend will host the app's APIs and main functionalities, such as crawling websites, archiving and retrieving snapshots.
