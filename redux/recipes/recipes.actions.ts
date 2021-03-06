import { Dispatch } from 'react'
import {
  GetRecipeAction,
  GetSweetAction,
  SetErrorAction,
  ActionTypes,
  SearchSweetAction,
  ClearSearchSweetAction,
  GetSweetByCategoryAction,
  GetSweetByCategoryAPIAction,
} from './recipes.types'

type GetRecipeDispatch = GetRecipeAction | SetErrorAction

export const getRecipes = () => async (
  dispatch: Dispatch<GetRecipeDispatch>,
) => {
  try {
    const res = await fetch('http://localhost:5000/recipes')
    const data = await res.json()

    dispatch({
      type: ActionTypes.GET_RECIPE,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: 'oops something went wrong',
    })
  }
}

type GetSweetsDispatch = GetSweetAction | SetErrorAction

export const getSweets = () => async (
  dispatch: Dispatch<GetSweetsDispatch>,
) => {
  try {
    // http://localhost:3000/all
    const res = await fetch('http://localhost:3000/all')
    const data = await res.json()

    dispatch({
      type: ActionTypes.GET_SWEETS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: 'oops something went wrong',
    })
  }
}

export const searchSweet = (text: string): SearchSweetAction => {
  return {
    type: ActionTypes.SEARCH_SWEET,
    payload: text,
  }
}
export const clearSearchSweet = (): ClearSearchSweetAction => {
  return {
    type: ActionTypes.CLEAR_SEARCH_SWEET,
  }
}

export const getSweetByCategory = (
  category: string | undefined,
): GetSweetByCategoryAction => {
  return {
    type: ActionTypes.GET_SWEETS_BY_CATEGORY,
    payload: category,
  }
}

type GetSweetsByAPiDispatch = GetSweetByCategoryAPIAction | SetErrorAction

export const getSweetByAPICategory = (category: string | undefined) => async (
  dispatch: Dispatch<GetSweetsByAPiDispatch>,
) => {
  try {
    const res = await fetch('http://localhost:3000/product/' + category)
    const data = await res.json()
    dispatch({
      type: ActionTypes.GET_SWEETS_BY_CATEGORY_API,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: 'oops something went wrong',
    })
  }
}
