export interface Subject {

id: string;
title: string;
niche: string; 
status: 'idée' | 'en cours' | 'terminé';
createdAt: Date;
}