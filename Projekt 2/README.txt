Projekt zawiera

/backend
/frontend

Aby go uruchomić musimy:
    - utworzyć bazę danych o nazwie crime_reports_projekt lub zmienić nazwę w pliku /backend/config/config.json w linijce 5
    - uruchomić serwer na poprawnych portach
    - wpisać npm install w konsoli w folderze backend
    - wpisać npm install w konsoli w folderze frontend
    - wpisać npm start w konsoli w folderze backend
    - wpisać npm start w konsoli w folderze frontend

Po zainstalowaniu potrzebnych pakietów możemy albo pracować na czystej bazie 
(musimy wtedy stworzyć ręcznie konto za pomocą GET http://localhost:3001/login/hash/%%%%%$ ) zamieniamy %%%%% na haslo dla nowego użytkownika i do bazy wklejamy 
wygenerowany token, musimy pamiętać o formacie mail@mail.mail!

Przygotowana została baza testowa którą wystarczy wgrać, jej nazwa to: crime_reports_projekt.sql

Jest tam kilka przygotowanych wezwań czekających na przyjęcie do realizacji i 5 kont testowych wszystkie o tych samych funkcjach.

Dane do logowania:

jake.peralta@nypd.org
haslo
/////////////////////
amy.santiago@nypd.org
haslo2
/////////////////////
rosa.diaz@nypd.org
haslo3
/////////////////////
terry.crews@nypd.org
haslo4
/////////////////////
ray.holt@nypd.org
haslo5
/////////////////////

Przycisk logowania został schowany na dole gdyż strona jest przystosowana do jak najszybszego dostępu do formularza dla obywatela.