import React, { useContext } from 'react'

//Le context est une méthode permettant de transmettre des données dans une arborescence de composants sans avoir à transmettre manuellement des accessoires, une variable globale ou un prérequis d'objet pour React Context, à tous les niveaux, il permet d'éviter le prop drilling voir Nissim °:
//Attention les props sont l'essence meme de React donc toujours les utiliser.....

//createContext permet l'initialisation de la variable globale
const AppContext = React.createContext()

//Provider permet d'englober le composant ou le veut rendre les données dans l'arborescence

// children voir Nissim....:), mais il permet d'englober des élements enfants dans un composant parent
// value permet de définir les élements que l'on veut envoyé
const AppProvider = ({ children }) => {
	const initialState = {
		header: 'header',
		main: 'main',
		footer: 'footer',
	}

	return (
		<AppContext.Provider value={initialState}>{children}</AppContext.Provider>
	)
}

// export de la fonction qui sera reutilise dans les composants pour l'utilisation des données
export const useGlobalContext = () => {
	return useContext(AppContext)
}

//Voir le composant Header pour initialisation de la variable globale
//Objectif de remplacer dynamiquement les données header,main,footer, je suis un header est ecrit en dur (voir Header),
//il faut que les trois composants soit écrit de maniere dynamique
//ne pas oubliez d'importer les composants dans App

export { AppContext, AppProvider }
