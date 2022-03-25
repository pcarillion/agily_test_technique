# agily_test_technique


# structure

j'ai divisé de façon assez classique mon projet ainsi:
- un dossier Components avec les composants
- un dossier api qui effectue les calls API
- un dossier style qui permet de regrouper le CSS

J'ai choisi de n'avoir qu'une page qui permet de passer de la recherche au résultat, par simplicité, du fait de la petite taille de l'app. 

# temps passé

environ 2h en tout, j'ai essayé de ne pas dépasser
étant donné que je l'ai fait en plusieurs fois et que j'ai rencontré des soucis techniques, j'ai du mal à évaluer le temps précis que j'ai passé sur chaque étape, mais j'ai essayé de prioriser sur l'architecture, le bon fonctionnement de l'API, et ensuite de prendre dans l'ordre du parcours utilisateur, avec la recherche puis l'arrivée sur la page des résultats


# problèmes rencontrés

- je n'ai pas trouvé l'API des icones; j'ai l'url donné dans le readMe mais je n'ai pas eu le temps de chercher le nom de chaque icone pour l'appeler
- le temps me semble un peu court pour tout effectuer
- j'ai rencontré quelques difficultés techniques qui m'ont pas mal ralenti

# ce que je pourrais améliorer, et que je n'ai pas eu le temps de faire

- scoper le css avec des styledComponents
- créer une véritable classe APIHandler dans le fichier d'api
- améliorer l'UX au niveau de la recherche, notamment l'autocomplete
- avoir les dates écrites proprement en lettres
- changer la langue des villes en français (le paramètre lang=fr ne semblait pas fonctionner, je n'ai pas eu le temps de chercher plus)
- terminer l'intégration de la page 2
- cleaner les useEffect


# ce que l'on pourrait faire pour améliorer le projet

- utiliser l'API de google pour récupérer des images dynamiques des villes