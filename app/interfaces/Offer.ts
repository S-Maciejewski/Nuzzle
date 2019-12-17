export interface OfferItem {
    OfferID: number;
    TypeID: number;
    Type: string;
    PostDate: string;
    Label: string;
    Description: string;
    Price: number;
    OwnerID: number;
    LatitudePos: number;
    LongitudePos: number;
    Address: string;
    Name: string;
    Surname: string;
    ImageURL: string;
}

export interface OfferTypes {
    ID: number;
    Type: string;
}

export interface NewOfferItem {
    TypeID: number;
    Type: string;
    Label: string;
    Description: string;
    AddressID: number;
    Address: string;
    Price: number;
    ImageURL: string;
    Date: string;
}