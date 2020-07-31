import React, { useContext, useEffect } from 'react'
import { RecipesContext } from '../utils/RecipesContext'
import { useHistory } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

//component
import RecipiesList from './RecipiesList'

export default function DisplayRecipes() {
    //Shanon Fritz code
    const { recipes } = useContext(RecipesContext)
    const { push } = useHistory()

    const redirect = () => {
        return push('/add')
    }
    //Shanon Fritz code

    //royer code


    return (
        <RecipiesList
            recipes={recipes}
            redirect={redirect}
        />
        //royer code

        
    )
}

