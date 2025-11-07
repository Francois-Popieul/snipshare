# 🚀 SnipShare

SnipShare est une plateforme de **partage de snippets de code** conçue pour les agents d’une **collectivité territoriale**. Elle permet de stocker, partager et commenter des extraits de code réutilisables, dans un environnement sécurisé et ergonomique.

---

## 📦 Fonctionnalités clés

- 🔐 **Authentification sécurisée** (cookies, hash argon2, jeton temporaire)
- ✍️ **Création et gestion de snippets**
- 👁️ **Visibilité personnalisée** : public, privé, non-répertorié
- ❤️ **Likes et commentaires**
- 🔍 **Recherche avancée** par titre, langage, étiquettes
- 🧑‍💻 **Profil utilisateur** avec snippets créés/likés et mise à jour des données personnelles
- 📱 **Responsive design**
- 🧪 **Tests backend** unitaires et fonctionnels
- 🐳 **Architecture Dockerisée** (3 conteneurs : frontend, backend, base de données)

---

## 🧰 Stack technique

| Composant        | Technologie                             |
| ---------------- | --------------------------------------- |
| Backend          | Node.js + Express + TypeScript          |
| Frontend         | React + TypeScript                      |
| Base de données  | PostgreSQL                              |
| Authentification | Cookies + Argon2 + Token                |
| Architecture     | MVC (backend), Atomic Design (frontend) |
| Tests            | Vitest / Jest / Supertest               |
| DevOps           | Docker (3 services)                     |

---

## 🧠 Modélisation

- Méthodologie **Merise** :
  - MCD → MLD → MPD → LDD

---

## 📁 Structure du projet

snipshare/ ├── backend/ │ ├── src/ │ └── tests/ ├── frontend/ │ ├── src/ │ └── assets/ ├── database/ │ └── init.sql ├── docker-compose.yml └── README.md

---

## 📜 Licence

Projet développé dans le cadre d’un exercice pédagogique.
