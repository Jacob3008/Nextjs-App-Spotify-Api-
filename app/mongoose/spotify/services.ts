import { SongInterface } from "./interface";


export async function storeSong(doc: SongInterface, model: any): Promise<boolean> {
    try {
        await model.create(doc);
    } catch (err) {
        return false;
    }
    return true;
}

export async function getAllSongs(model: any) {
    try {
        return await model.find()
    } catch(err) {
        console.log(err);
    }
    
}

export async function getSize(model: any) {
    try {
        return await model.countDocuments();
    } catch(err) {
        console.log(err);
    }
}

