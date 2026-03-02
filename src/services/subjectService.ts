import { Subject } from '../models/subject';

// Fonction pour récupérer un sujet par son ID
export const getSubjectById = (id: string, allSubjects: Subject[]): Subject | undefined => {
    return allSubjects.find(subject => subject.id === id);
};

// Fonction pour ajouter une nouvelle source à un sujet
export const addSourceToSubject = (subjectId: string, newSource: string, allSubjects: Subject[]): Subject[] => {
    return allSubjects.map(subject => 
        subject.id === subjectId 
            ? { ...subject, sources: [...subject.sources, newSource] } 
            : subject
    );
};

// Fonction pour assigner un membre de l'équipe à un sujet
export const assignTeamMember = (subjectId: string, memberName: string, allSubjects: Subject[]): Subject[] => {
    return allSubjects.map(subject => 
        subject.id === subjectId 
            ? { ...subject, team: [...subject.team, memberName] } 
            : subject
    );
};

// Fonction pour générer une URL de recherche Google ou YouTube à partir du titre d'un sujet
export const getSearchUrl = (title: string, platform: 'google' | 'youtube'): string => {
  const baseUrl = platform === 'google' 
    ? "https://www.google.com/search?q=" 
    : "https://www.youtube.com/results?search_query=";

  const cleanedTitle = title.split(' ').join('+');

  return baseUrl + cleanedTitle; 
};

// Fonction pour mettre à jour le statut d'un sujet 
export const updateSubjectStatus = (subjectId: string, newStatus: 'idée' | 'en cours' | 'terminé', allSubjects: Subject[]): Subject[] => {                                          
    return allSubjects.map(subject =>
        subject.id === subjectId
            ? { ...subject, status: newStatus } 
            : subject
    );
};