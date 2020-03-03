/**
 * @class tsHelper
 * @version 1.0.0
 * @description Regroupe des fonctions utile durant le developpement
 * @author olebrasse
 */
export default class tsHelper {

  constructor() {

  }

  /**
   * @function init
   * @description Initialisation du script - ajouté vos besoins personel lors de l'initialisation
   */
  init() {
    console.log(`tsHelper -> Initialiser sur ${this.getDomainHref}`)
  }

  /**
   * @function sortNumber
   * @description Fonction qui retournera un array en ascendand ou descendand (dependand du premier parametre choisit)
   * @param type - Représente un string qui doit être 'asc' pour ascendant and 'desc' pour descendand
   * @param array - Représente une série de numero dans un array en entré de paramètre
   */
  sortNumber(type: string, array: Array< number >){
    switch(type){
      case "asc":
        return array.sort((a,b) => a-b);
      case "desc":
        return array.sort((a,b) => b-a);
      default:
        console.log("tsHelper.sortNumber [Error]: unrecognised sorting type, please define a sorting type 'asc' or 'desc'");
        break;
    }
  }

  /**
   * @function sortString
   * @description Fonction qui retournera un array en ascendand ou descendand (dependand du premier parametre choisit)
   * @param type - Représente un string qui doit être 'asc' pour ascendant and 'desc' pour descendand
   * @param array - Représente une série de string dans un array en entré de paramètre
   */
  sortString(type: string, array: Array< string >){
    switch(type){
      case "asc":
        array.sort((a,b) => (''+a).localeCompare(b))
      case "desc":
          array.sort((a,b) => (''+b).localeCompare(a))
      default:
        console.log("tsHelper.sortString [Error]: unrecognised sorting type, please define a sorting type 'asc' or 'desc'");
        break;
    }
  }

  /**
   * @function smallestNum
   * @description Une fonction qui va retourné le plus petit numero se trouvant dans un array
   * @param { Array<number> } array - Représente une série de numero dans un array en entré de paramètre 
   */
  smallestNum(array: Array< number > ) {
    return Math.min.apply(Math, array)
  }

  /**
   * @function biggestNum
   * @description Une fonction qui va retourné le plus gros numero se trouvant dans un array
   * @param { number } array - Représente une série de numero dans un array en entré de paramètre 
   */
  biggestNum(array: Array< number > ) {
    return Math.max.apply(Math, array)
  }

  /**
   * @function toNum
   * @description Une fonction qui va convertir un string en valeur numérique s'il contient des valeurs numérique dans les premiers charactéres, si le string n'est pas numerique il retourne la valeur 0
   * @param {string} word - Représente un string en entré de paramètre
   */
  toNum(word: string) {
    let val: number
    parseFloat(word) ? val = parseFloat(word) : val = 0
    return val
  }

  /**
   * @function arrayMoreThan
   * @description Une fonction qui prend en entré un array et une valeur numérique pour retourner un nouvel array avec uniquement les nombre supérieur ou egal au chiffre numérique d'entré.
   * @param { Array<number> } array - Représente un array contenant des numéro 
   * @param { number } val - Représente la valeur numérique
   */
  arrayMoreThan(array: Array<number>, val: number) {
    let newArray: Array<number>
      array.forEach(currentItem => {
        if (currentItem >= val) {
          newArray.push(currentItem)
        }
      })
    return newArray
  }

  /**
   * @function extractKeyData
   * @param { Array<any> } array - Représente un array de jeux de donnés
   * @param key - Représente la clef des donnés à extraire
   */
  extractKeyData(array: Array<any>, key: string){
    let newArray: Array<any>
      array.forEach(currentItem => {
        newArray.push(currentItem[key])
      })
    return newArray;
  }

  /**
   * @function arrayLessThan
   * @description Une fonction qui prend en entré un array et une valeur numérique pour retourner un nouvel array avec uniquement les nombre inférieur ou egal au chiffre numérique d'entré.
   * @param { Array<number> } array - Représente un array contenant des numéro 
   * @param { number } val - Représente la valeur numérique
   */
  arrayLessThan(array: Array<number> , val: number) {
    let newArray: Array<number>
      array.forEach(currentItem => {
        if (currentItem <= val) {
          newArray.push(currentItem)
        }
      })
    return newArray
  }

  /**
   * @function arrayToNum
   * @description Une fonction permettant de transformer tout numéro de type string dans un array vers le type number dans un array, si l'une des valeur n'est pas du type number il sera représenté comme un 0 dans le nouveau array
   * @param { Array<string> } array - Représente une série de numéro de type string dans un array en entré de paramètre
   */
  arrayToNum(array: Array<string> ) {
    let newArray: Array<number>
      array.forEach(currentItem => {
        newArray.push(parseFloat(currentItem))
      })
    return newArray
  }

  /**
   * @function getDomainName
   * @description Une fonction qui retourne le nom de domaine ou le script est initialiser
   */
  getDomainName() {
    return window.location.hostname
  }

  /**
   * @function getDomainHref
   * @description Une fonction qui retourne le lien Href du domaine ou le script est initialiser
   */
  getDomainHref() {
    return document.location.href
  }
}