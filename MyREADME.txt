This project listens to port 3000 localhost.
express and cor dependencies were used.

The best way I found to approach this solution in a more controlled manner, was to use APIs.
POST method to crete the clean json file and populate with cleaner info, GET to get the original information.

To download dependencies, first run npm install.
Then, to run, use npm start.

After npm starting the project, you have to click on the virtual button for cleaning.
In order to make it scalable, that functionality was added, so can be adaptable maybe to other features as well if need be.

Also, I decided to work with vue, as this permits me to manage my logic better.
Also, adding to the flexibility and scalability, can be integrated to front end as well.

I used the most important keys to detect duplicates id and keys for fields and keys and identifiers for Objects.

There is the parent component that holds everything - cleaningApp, in case we might need to display anything on the page.
The component cleaner to manage interactions with front end.

Initially, I wanted to work with Object and Fields component objects, which I finally did directly the logic using the entire data retrieved.

No time to do proper tests, just a few, as I wanted to stay as much as possible within the 2 hours recommended.

Points I could improve: sorting with more keys to search for more similarities, bettering my json output. 

