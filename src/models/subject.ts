export interface Subject {

id: string;
title: string;
niche: string; 
status: 'idée' | 'en cours' | 'terminé';
sources : string[];
team: string[];
priority: 'faible'
createdAt: Date;
}