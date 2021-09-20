package fr.formation.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Membre")
public class Parachutiste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBRE_ID", nullable = false)
    private int id;

    @Column(name = "MEMBRE_NOM", nullable = false, length = 50)
    private String nom;

    @Column(name = "MEMBRE_PRENOM", nullable = false, length = 50)
    private String prenom;

    @Column(name = "MEMBRE_LICENCE", nullable = false, length = 50)
    private String licence;

    @Column(name = "MEMBRE_DATE_LICENCE", nullable = false)
    private LocalDate dateLicence;

    @OneToMany(mappedBy = "proprietaire")
    private List<Parachute> listeParachute;

    @OneToOne
    @JoinColumn(name = "PARACHUTE_EQUIPE", nullable = true)
    private Parachute parachuteEquipe;


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getLicence() {
        return licence;
    }
    public void setLicence(String licence) {
        this.licence = licence;
    }

    public LocalDate getDateLicence() {
        return dateLicence;
    }
    public void setDateLicence(LocalDate dateLicence) {
        this.dateLicence = dateLicence;
    }

    public List<Parachute> getListeParachute() {
        return listeParachute;
    }
    public void setListeParachute(List<Parachute> listeParachute) {
        this.listeParachute = listeParachute;
    }

    public Parachute getParachuteEquipe() {
        return parachuteEquipe;
    }
    public void setParachuteEquipe(Parachute parachuteEquipe) {
        this.parachuteEquipe = parachuteEquipe;
    }

    public Parachutiste(String nom, String prenom, String licence, LocalDate dateLicence) {
        this.nom = nom;
        this.prenom = prenom;
        this.licence = licence;
        this.dateLicence = dateLicence;
    }

}
