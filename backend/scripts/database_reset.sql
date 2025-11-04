DO
$$
DECLARE
    r RECORD;
BEGIN
    -- Désactiver temporairement les contraintes de clé étrangère
    EXECUTE 'SET session_replication_role = replica';

    -- Boucle sur toutes les tables de l'utilisateur courant dans le schéma public
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS public.' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;

    -- Réactiver les contraintes
    EXECUTE 'SET session_replication_role = origin';
END
$$;