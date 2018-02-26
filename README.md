# Sample Kanban App

This is a sampleapp build using React, Redux, Redux Saga. The App have an initially loaded categories and Task cards for each categories. The user have the provision to add new categories or cards.
For each category there is also an underlying filter that the user could use.

## Build & Run

### Clone

```git clone https://github.com/sirajulm/kanban.git```

```cd kanban```

### Install dependencies
``` yarn install```

### Running the Application
``` yarn start```

Launch your favourite browser and point it to [http://localhost:8080/](http://localhost:8080/)


## Known Issues

* Since the exact Font was not aware, using ```Titillium Web``` which resemples closer.
* Icons/images are cropped out from the task image provided.
* Menu bar gradually collpase when resized.
* Arrow icons are not added to the profile link on the Menu bar.
* Work time circular gauge is static image in Menu bar.
* New Created task are added to the end of Today's task, (Not sorting based on completion, similar to Trello board)
* Container doesnt scroll to the new card/category when it is added.