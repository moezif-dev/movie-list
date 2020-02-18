# movie-list
my-movie-list is a React application I built to fresh up my skills in building react applications.
 
The main functional piece of the UI is a Search Input where users can search by multiple parameters to find
information about desired digital content.

You can find a demo for the application at the following link:
http://my-movie-list-d2354.firebaseapp.com/

### Features
* Search Input that will match content according to title, with the option to select different categories to search by title [Movies, Series, Episodes].
* The ability for the user to select content to show a detailed view of that content.
* The ability for the user to save a content resource under a &#39;My Content&#39; tab.
  * Ability to delete content from this tab.
  * Ability to mark each content item as &#39;watched&#39;.
* The ability to presists user data by connecting redux to browser's localStorage.
* The application caches all OMDB GET requests to optimize the performance for loading repeated search results, and content details page. 
* The application uses a custom-built theme for foundation UI Library, and it is responsive on both mobile and web browsers.
* Pagination of search responses.

### Running the application
in order to run this application please do the following steps.

1. Clone this repo
```
git clone https://github.com/moezif-dev/movie-list.git
```

2. navigate to client folder
```
cd movie-list/client
```
3. Run npm install to install all the application dependencies. 
```
npm install
```
4. Run npm start to launch the application.
```
npm run start
```
