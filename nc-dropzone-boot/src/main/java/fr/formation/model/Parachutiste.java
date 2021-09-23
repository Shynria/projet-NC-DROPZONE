package fr.formation.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name = "Membre")
public class Parachutiste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBRE_ID", nullable = false)
    @JsonView({Views.Commons.class, Views.BeerLine.class})
    private int id;

    @Column(name = "MEMBRE_NOM", nullable = false, length = 50)
    @JsonView({Views.Parachutiste.class, Views.Parachute.class, Views.BeerLine.class, Views.Vol.class, Views.Saut.class, Views.SautTandem.class})
    private String nom;

    @Column(name = "MEMBRE_PRENOM", nullable = false, length = 50)
    @JsonView({Views.Parachutiste.class, Views.BeerLine.class, Views.Vol.class, Views.Saut.class, Views.SautTandem.class})
    private String prenom;

    @Column(name = "MEMBRE_DATE_LICENCE", nullable = false)
    @JsonView(Views.Parachutiste.class)
    private LocalDate dateLicence;

    @OneToMany(mappedBy = "proprietaire")
    @JsonView(Views.Parachutiste.class)
    private List<Parachute> listeParachute;

    @OneToOne
    @JoinColumn(name = "PARACHUTE_EQUIPE", nullable = true)
    @JsonView(Views.Parachutiste.class)
    private Parachute parachuteEquipe;

    @OneToMany(mappedBy = "responsableVol")
    private List<Vol> vol;

    @Column(name = "MEMBRE_NIVEAU")
    @JsonView({Views.Parachutiste.class, Views.BeerLine.class})
    private Niveau niveau;

    @ManyToMany(mappedBy = "parachutistes")
    private List<Saut> sauts;

    @OneToMany(mappedBy = "parachutiste")
    private List<SautTandem> sautTandem;

    @OneToMany(mappedBy = "instructeur")
    private List<SautTandem> ListeSautInstructeur;

    @OneToMany(mappedBy = "videoman")
    private List<SautTandem> ListeSautVideoman;

    @Column(name = "MEMBRE_BEER_LINE")
    @JsonView(Views.Parachutiste.class)
    private boolean isBeerLine = false;

    @Column(name = "MEMBRE_LICENCE")
    @JsonView(Views.Parachutiste.class)
    private String licence;


    
    
    public String getLicence() {
        return licence;
    }
    public void setLicence(String licence) {
        this.licence = licence;
    }
    public boolean isBeerLine() {
        return isBeerLine;
    }
    public void setBeerLine(boolean isBeerLine) {
        this.isBeerLine = isBeerLine;
    }
    public List<SautTandem> getListeSautInstructeur() {
        return ListeSautInstructeur;
    }
    public void setListeSautInstructeur(List<SautTandem> listeSautInstructeur) {
        ListeSautInstructeur = listeSautInstructeur;
    }
    public List<SautTandem> getListeSautVideoman() {
        return ListeSautVideoman;
    }
    public void setListeSautVideoman(List<SautTandem> listeSautVideoman) {
        ListeSautVideoman = listeSautVideoman;
    }
    public Niveau getNiveau() {
        return niveau;
    }
    public void setNiveau(Niveau niveau) {
        this.niveau = niveau;
    }
    
    public List<Vol> getVol() {
        return vol;
    }
    public void setVol(List<Vol> vol) {
        this.vol = vol;
    }
  
    public List<Saut> getSauts() {
        return sauts;
    }
    public void setSauts(List<Saut> sauts) {
        this.sauts = sauts;
    }
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

    public Parachutiste() {
    }

}
