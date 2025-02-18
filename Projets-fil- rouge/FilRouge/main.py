from graphviz import Digraph

# Création du graphe
dot = Digraph("MLD_Ticketing")

# Définition des entités
dot.node("Utilisateur", "Utilisateur\n(id, nom, prénom, email, rôle, mot_de_passe)")
dot.node("Ticket", "Ticket\n(id, titre, description, statut, date_creation, date_modification, id_client, id_technicien, severité, catégorie)")
dot.node("Statut", "Statut\n(id, libelle)")
dot.node("Catégorie", "Catégorie\n(id, libelle)")
dot.node("Affectation", "Affectation\n(id, id_ticket, id_technicien, date_affectation)")
dot.node("Fichier", "Fichier\n(id, id_ticket, chemin_fichier)")
dot.node("Notification", "Notification\n(id, id_ticket, id_utilisateur, type_notification, date_notification, lue)")
dot.node("BaseConnaissance", "Base de connaissance\n(id, titre, contenu, id_createur, date_creation)")

# Relations
dot.edge("Utilisateur", "Ticket", label="1,N (soumet)")
dot.edge("Utilisateur", "Ticket", label="0,N (assigne)")
dot.edge("Ticket", "Statut", label="N,1 (possède)")
dot.edge("Ticket", "Catégorie", label="N,1 (classé)")
dot.edge("Ticket", "Affectation", label="1,N (historique)")
dot.edge("Affectation", "Utilisateur", label="N,1 (technicien)")
dot.edge("Ticket", "Fichier", label="1,N (pièces jointes)")
dot.edge("Ticket", "Notification", label="1,N (notifications)")
dot.edge("Utilisateur", "Notification", label="1,N (reçoit)")
dot.edge("Utilisateur", "BaseConnaissance", label="1,N (crée)")

# Affichage
dot.attr(size='10', rankdir='LR')  # Organisation horizontale
dot