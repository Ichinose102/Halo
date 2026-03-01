import { Subject } from '../models/subject';


export const getSubjectById = (id: string, allSubjects: Subject[]): Subject | undefined => {
    return allSubjects.find(subject => subject.id === id);
};


export const addSourceToSubject = (subjectId: string, newSource: string, allSubjects: Subject[]): Subject[] => {
    return allSubjects.map(subject => 
        subject.id === subjectId 
            ? { ...subject, sources: [...subject.sources, newSource] } 
            : subject
    );
};


export const assignTeamMember = (subjectId: string, memberName: string, allSubjects: Subject[]): Subject[] => {
    return allSubjects.map(subject => 
        subject.id === subjectId 
            ? { ...subject, team: [...subject.team, memberName] } 
            : subject
    );
};

export const getSearchUrl = (title: string, platform: 'google' | 'youtube'): string => {
  const baseUrl = platform === 'google' 
    ? "https://www.google.com/search?q=" 
    : "https://www.youtube.com/results?search_query=";

  const cleanedTitle = title.split(' ').join('+');

  return baseUrl + cleanedTitle; 
};