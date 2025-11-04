-- Insérer des langages de programmation
INSERT INTO
    code_language (name)
VALUES ('Ada'),
    ('Assembly'),
    ('Bash'),
    ('C'),
    ('C#'),
    ('C++'),
    ('COBOL'),
    ('Crystal'),
    ('Dart'),
    ('Delphi/Object Pascal'),
    ('Elixir'),
    ('Elm'),
    ('Erlang'),
    ('F#'),
    ('Fortran'),
    ('Go'),
    ('Groovy'),
    ('Hack'),
    ('Haskell'),
    ('HTML/CSS'),
    ('Java'),
    ('JavaScript'),
    ('Julia'),
    ('Kotlin'),
    ('Lisp'),
    ('Lua'),
    ('MATLAB'),
    ('Nim'),
    ('Objective-C'),
    ('Pascal'),
    ('Perl'),
    ('PHP'),
    ('PL/SQL'),
    ('Prolog'),
    ('Python'),
    ('R'),
    ('Ruby'),
    ('Rust'),
    ('Scala'),
    ('Scheme'),
    ('Shell'),
    ('Smalltalk'),
    ('Solidity'),
    ('SQL'),
    ('Swift'),
    ('Tcl'),
    ('TypeScript'),
    ('V'),
    ('VBA'),
    ('Visual Basic .NET');

-- Insérer des tags
INSERT INTO
    tag (name)
VALUES ('AJAX'),
    ('Algorithme'),
    (
        'Analyse syntaxique (Parsing)'
    ),
    ('API'),
    ('API REST'),
    ('Apprentissage automatique'),
    ('Arbre'),
    ('Array (Tableau)'),
    ('Asynchrone'),
    ('Authentification'),
    ('Automatisation'),
    ('Backend (Serveur)'),
    ('Base de données'),
    (
        'Benchmark (Test de performance)'
    ),
    ('Bibliothèque'),
    ('Binaire'),
    (
        'Binding (Liaison de données)'
    ),
    ('Boilerplate (Code standard)'),
    ('Boucle'),
    ('Chiffrement'),
    ('Classe'),
    ('Closure (Fermeture)'),
    (
        'CMS (Système de gestion de contenu)'
    ),
    ('Commentaires'),
    ('Composant UI'),
    ('Compression'),
    ('Concurrence'),
    ('Configuration'),
    ('Conteneurisation'),
    ('Contrôle de version'),
    ('Correction de bug'),
    ('Cryptographie'),
    ('CSS'),
    ('Date et heure'),
    ('Débogage'),
    ('Déploiement'),
    ('DevOps'),
    ('Écouteur d’événement'),
    ('Exception'),
    ('Exportation'),
    ('Expression'),
    (
        'Expression régulière (Regex)'
    ),
    ('File d’attente'),
    ('Filtrage'),
    ('Firebase'),
    ('Fonction'),
    ('Framework'),
    ('Frontend (Client)'),
    ('Génériques'),
    ('Gestion d’état'),
    ('Gestion de fichiers'),
    ('Gestion des erreurs'),
    ('Gestionnaire de paquets'),
    ('Git'),
    ('GraphQL'),
    ('Hachage'),
    ('Hook'),
    ('HTML'),
    ('Importation'),
    ('Indexation'),
    ('Interface'),
    (
        'Interface en ligne de commande (CLI)'
    ),
    ('Internationalisation (i18n)'),
    ('Internet des objets (IoT)'),
    ('Itération'),
    ('Jeton'),
    ('Jeton JWT'),
    ('Journalisation (Logging)'),
    ('JSON'),
    ('Lambda'),
    ('Liaison de données'),
    ('LINQ'),
    ('Linux'),
    ('Liste'),
    ('Manipulation de chaînes'),
    ('Manipulation du DOM'),
    ('Map (Dictionnaire)'),
    ('Mémorisation'),
    ('Middleware'),
    ('Modèle'),
    ('Module'),
    ('Multithreading (Multitâche)'),
    ('MVC'),
    ('MySQL'),
    ('Node.js'),
    ('Optimisation'),
    ('Optimisation de code'),
    ('ORM'),
    ('Patron de commande'),
    ('Patron de conception'),
    ('Patron décorateur'),
    ('Patron observateur'),
    ('Patron singleton'),
    ('Performance'),
    ('Plugin'),
    ('Portée (Scope)'),
    ('PostgreSQL'),
    (
        'Programmation orientée objet (POO)'
    ),
    ('Promesse'),
    ('React'),
    ('Récursivité'),
    ('Redux'),
    ('Refactorisation'),
    ('Requête HTTP'),
    ('Réseau'),
    ('Routage'),
    ('SASS'),
    ('Script Shell'),
    ('Sécurité'),
    ('Sécurité des threads'),
    ('Sérialisation'),
    ('Session'),
    ('SQL'),
    ('Structure de données'),
    ('Stylisation'),
    ('Switch / Case'),
    ('Syntaxe'),
    ('Test'),
    ('Test unitaire'),
    ('Tri'),
    ('Validation'),
    ('Validation de formulaire'),
    ('Validation des entrées'),
    ('Vue.js'),
    ('WebAssembly'),
    ('Webpack'),
    ('WebSocket'),
    ('XML'),
    ('YAML');

-- Insérer des utilisateurs
INSERT INTO
    site_user (
        username,
        gender,
        mail_address,
        password,
        bio
    )
VALUES (
        'Denis Ritchie',
        'male',
        'denis.ritchie@ara.gouv.fr',
        'securePass123',
        ''
    ),
    (
        'Ada Lovelace',
        'female',
        'ada.lovelace@ara.gouv.fr',
        'codeQueen456',
        ''
    );

-- Insérer des snippets
INSERT INTO
    snippet (
        title,
        description,
        code,
        creation_date,
        visibility,
        user_id
    )
VALUES (
        'Hello World en Python',
        'Script de base affichant Hello World.',
        'print("Hello, World!")',
        '2024-10-01',
        'public',
        1
    ),
    (
        'FizzBuzz en JavaScript',
        'Défi classique FizzBuzz bien connu.',
        'for(let i=1;i<=100;i++){console.log((i%3?"":"Fizz")+(i%5?"":"Buzz")||i)}',
        '2023-09-12',
        'public',
        2
    ),
    (
        'Requête SQL simple',
        'Sélectionne tous les utilisateurs de la base de données.',
        'SELECT * FROM site_user;',
        '2020-01-22',
        'public',
        1
    ),
    (
        'Factorielle en C',
        'Fonction récursive pour calculer une factorielle.',
        'int factorial(int n){return n<=1?1:n*factorial(n-1);}',
        '2022-03-14',
        'private',
        2
    ),
    (
        'Page HTML de base',
        'Structure HTML simple.',
        '<!DOCTYPE html><html><head><title>Page</title></head><body>Hello!</body></html>',
        '2019-06-24',
        'public',
        1
    ),
    (
        'Style de bouton en CSS',
        'Bouton stylisé avec effet au survol.',
        'button{background:#008CBA;color:white;padding:10px;border:none;}button:hover{background:#005f73;}',
        '2025-02-16',
        'private',
        2
    ),
    (
        'Tri à bulles en Java',
        'Implémentation de l’algorithme de tri à bulles.',
        'void bubbleSort(int[] arr){for(int i=0;i<arr.length-1;i++){for(int j=0;j<arr.length-i-1;j++){if(arr[j]>arr[j+1]){int temp=arr[j];arr[j]=arr[j+1];arr[j+1]=temp;}}}}',
        '2025-09-13',
        'public',
        1
    ),
    (
        'API REST avec Flask',
        'Point d’entrée simple pour une API REST.',
        'from flask import Flask\napp = Flask(__name__)\n@app.route("/")\ndef home():\n    return "API Home"',
        '2024-08-29',
        'unlisted',
        2
    ),
    (
        'Validation d’email avec Regex',
        'Motif Regex pour valider une adresse email.',
        'import re\npattern = r"^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$"',
        '2025-07-09',
        'public',
        1
    ),
    (
        'Grille responsive en CSS',
        'Mise en page en grille CSS pour un design adaptatif.',
        '.container{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;}',
        '2021-10-10',
        'public',
        2
    );

-- Associer des langages
INSERT INTO
    utilize (snippet_id, language_id)
VALUES (1, 35), -- Python
    (2, 22), -- JavaScript
    (3, 44), -- SQL
    (4, 4), -- C
    (5, 20), -- HTML/CSS
    (6, 20), -- HTML/CSS
    (7, 21), -- Java
    (8, 35), -- Python
    (9, 35), -- Python
    (10, 20);
-- HTML/CSS

-- Associer des étiquettes
INSERT INTO
    categorize (snippet_id, tag_id)
VALUES (1, 47), -- Fonction
    (2, 19), -- Boucle
    (2, 47), -- Fonction
    (3, 13), -- Base de données
    (4, 77), -- Récursivité
    (4, 47), -- Fonction
    (5, 53), -- HTML
    (6, 32), -- CSS
    (7, 76), -- Tri
    (7, 47), -- Fonction
    (8, 4), -- API
    (9, 42), -- Expression régulière (Regex)
    (10, 93);
-- Stylisation

-- Associer des commentaires
INSERT INTO
    criticize (
        snippet_id,
        user_id,
        message,
        creation_date
    )
VALUES (
        1,
        2,
        'Propre et clair ! Parfait pour les débutants.',
        '2025-11-02'
    ),
    (
        2,
        1,
        'Défi classique, bien implémenté.',
        '2025-11-02'
    ),
    (
        3,
        2,
        'Requête simple et efficace.',
        '2025-11-02'
    ),
    (
        4,
        1,
        'La logique récursive est parfaitement maîtrisée.',
        '2025-11-02'
    ),
    (
        5,
        2,
        'Modèle de départ parfait pour du HTML.',
        '2025-11-02'
    ),
    (
        6,
        1,
        'J’adore l’effet au survol !',
        '2025-11-02'
    ),
    (
        7,
        2,
        'Tri efficace, bien joué.',
        '2025-11-02'
    ),
    (
        8,
        1,
        'Flask rend les API REST vraiment simples.',
        '2025-11-02'
    ),
    (
        9,
        2,
        'Le motif regex est très utile.',
        '2025-11-02'
    ),
    (
        9,
        1,
        'Cette expression régulière envoie du steak.',
        '2025-11-02'
    ),
    (
        10,
        2,
        'Ouah, vraiment trop utile. Je m’en sers tous les jours',
        '2025-11-02'
    ),
    (
        10,
        1,
        'Le design responsive est bien géré.',
        '2025-11-02'
    );

-- Associer des likes
INSERT INTO
    rate (snippet_id, user_id)
VALUES (1, 2),
    (2, 1),
    (3, 2),
    (4, 1),
    (5, 2),
    (6, 1),
    (7, 2),
    (8, 1),
    (9, 2),
    (10, 1);