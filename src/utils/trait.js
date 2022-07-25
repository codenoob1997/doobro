import json from '@/assets/json/doodle_metadata.json'
export const trait_type = ["face","hair","body","head","background","piercing"]

export function compute_trait_value(objs){
    const map = new Map()
    for(const trait of trait_type){
        map[trait] = []
    }
    for(const [index,value] of Object.entries(objs)){
        for(const trait of value["attributes"]){
            if(map[trait['trait_type']].indexOf(trait['value'])===-1){
                map[trait['trait_type']].push(trait['value'])
            }
        }
    }
    return map
}
// filter某的objs
// test traits
// exporttraits = {'face':'chill cig','background':'grey','hair':'blue toque','piercing':'pearl','head':'green'};

// boolean 
export function filter_trait(traits,obj){
    for(const [key,value] of Object.entries(traits)){
       if( obj['attributes'][key]!==value){
        return false;
       }
    }
    return true
}
// returns a obj list
export function preprocess(objs){
    const newObj = []
    const re = /ipfs:\/\/(\w*)/
    for(const [key,value] of Object.entries(objs)){
        newObj[key] = {}
        newObj[key]['image'] = "https://ipfs.io/ipfs/"+value['image'].match(re)[1]
        newObj[key]['name'] = value['name']
        newObj[key]['attributes']={}
        for(const trait of value['attributes']){
            newObj[key]['attributes'][trait['trait_type']] = trait['value']
        }
    }
    return newObj
}
// returns a object list
export function compute_objs(traits,objs){
    const res = objs.filter((obj)=>{
        return filter_trait(traits,obj)
    })
    return res;
}
