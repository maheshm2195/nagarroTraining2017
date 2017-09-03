Project Title:
TODO Application > A one-stop application to manage all your TODOs in one place.

Built by: Mahesh Mehandiratta (Employee code: 3146489)


Getting Started:
These instructions will get you a copy of the project up and running on your local machine for testing purposes.


Prerequisites:
1. Install Node.js      -> https://nodejs.org/en/download/
2. Install express      -> npm install express --save
3. Install body-parser  -> npm install body-parser --save


Running the application:
1. Open terminal
2. Go into the "Assignment/assingment3" directory inside terminal
3. Type "node index.js"
4. Open your browser
5. In address bar type "http://localhost:4000/" and hit Enter


Application layout:
The complete application is divide into four sections-
1. Active todos > This section shows the active todos. They can be made "completed" or "deleted" by clicking the checkbox or the "X" delete button respectively.
2. Add todo > This section is used for adding new todos in the Active section.
3. Completed todos > This section shows the completed todos. They can be made "active" or "deleted" by clicking the checkbox or the "X" delete button respectively.
4. Deleted todos > This section shows the deleted todos.


Features built:
1. Display TODOs category wise
2. Refreshing TODOs
3. Option to add new TODO
4. Dynamic refreshing of page using AJAX
5. Hide/Unhide Completed section
6. Hide/Unhide Deleted section
7. Manage active, completed and deleted TODOs using checkbox and delete button
8. All other features mentioned are covered too.


Features not built: None


Known Issues: None


IMPLEMENTATION DETAILS:

A. Structure of the app

       app
            node_modules
                    ...
            public
                    index.html
                    script.js
                    style.css
            screenshots
                    Capture1.png
                    Capture2-Adding todo.png
                    Capture3-Added todo.png
                    Capture4-Complete and delete functionality.png
                    Capture5-Deleted section hidden.png
                    Capture6-Completed section hidden.png
            index.js
            package.json
            readme.md
            seed.js


B. USE OF DIFFERENT FILES

    index.html
        It is the main html file that gets displayed in the browser. It uses style.css, bootstrap and a css from cloudflare.com to provide different styles.
    script.js
        This is the main JS file which is the heart of the complete app. It handles various DOM manipulations.
    style.css
        This is the stylesheet that is used for all the styling in the application
    index.js
        This is the server file where the server is made on port 4000 and various APIs are called based on type of request received and data is sent back.
    package.json
        This file contains project specific information like modules used.
    readme.md
        You're reading this file right now. It is the documentation of the complete project;
    seed.js
        This file is run when the server runs for the first time to seed some data to show in the browser. It also acts as a virtual database for storing changes in data.


C. Built With:

1. HTML
2. CSS
3. Javascript
4. Node.js
5. Bootstrap
6. AJAX