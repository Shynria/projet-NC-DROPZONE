package fr.formation.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name="parachute")
public class Parachute {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="PARACHUTE_ID")
    @JsonView(Views.Commons.class)
    private int id;

    @Column(name="PARACHUTE_NOM_HARNAIS", nullable = false, length = 50)
    @JsonView({Views.Parachute.class,Views.Parachutiste.class})
    private String nomHarnais;

    @Column(name="PARACHUTE_SYSTEME_SECURITE", nullable = false, length = 50)
    @JsonView({Views.Parachute.class,Views.Parachutiste.class})
    private String systemeSecurite;

    @Column(name="PARACHUTE_NOM_VOILE_PRINCIPALE", nullable = false, length = 50)
    @JsonView({Views.Parachute.class,Views.Parachutiste.class})
    private String nomVoilePrincipale;

    @Column(name="PARACHUTE_NOM_VOILE_SECOURS", nullable = false, length = 50)
    @JsonView({Views.Parachute.class,Views.Parachutiste.class})
    private String nomVoileSecours;

    @Column(name="PARACHUTE_TAILLE_VOILE_PRINCIPALE", nullable = false, length = 50)
    @JsonView({Views.Parachute.class,Views.Parachutiste.class})
    private int tailleVoilePrincipale;

    @Column(name="PARACHUTE_TAILLE_VOILE_SECOURS", nullable = false, length = 50)
    @JsonView({Views.Parachute.class,Views.Parachutiste.class})
    private int tailleVoileSecours;

    @Column(name="PARACHUTE_DATE_PLIAGE_VOILE_SECOURS", nullable = false)
    @JsonView({Views.Parachute.class,Views.Parachutiste.class})
    private LocalDate datePliageVoileSecours;

    @Column(name="PARACHUTE_ETAT", nullable = false)
    @JsonView({Views.Parachute.class,Views.Parachutiste.class})
    private boolean etat;

    @ManyToOne
    @JoinColumn(name="PARACHUTE_MEMBRE_ID", nullable = true)
    private Parachutiste proprietaire;

    @OneToOne(mappedBy = "parachuteEquipe")
    @JsonView(Views.Parachute.class)
    private Parachutiste utilisateur;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomHarnais() {
        return nomHarnais;
    }

    public void setNomHarnais(String nomHarnais) {
        this.nomHarnais = nomHarnais;
    }

    public String getSystemeSecurite() {
        return systemeSecurite;
    }

    public void setSystemeSecurite(String systemeSecurite) {
        this.systemeSecurite = systemeSecurite;
    }

    public String getNomVoilePrincipale() {
        return nomVoilePrincipale;
    }

    public void setNomVoilePrincipale(String nomVoilePrincipale) {
        this.nomVoilePrincipale = nomVoilePrincipale;
    }

    public String getNomVoileSecours() {
        return nomVoileSecours;
    }

    public void setNomVoileSecours(String nomVoileSecours) {
        this.nomVoileSecours = nomVoileSecours;
    }

    public int getTailleVoilePrincipale() {
        return tailleVoilePrincipale;
    }

    public void setTailleVoilePrincipale(int tailleVoilePrincipale) {
        this.tailleVoilePrincipale = tailleVoilePrincipale;
    }

    public int getTailleVoileSecours() {
        return tailleVoileSecours;
    }

    public void setTailleVoileSecours(int tailleVoileSecours) {
        this.tailleVoileSecours = tailleVoileSecours;
    }

    public LocalDate getDatePliageVoileSecours() {
        return datePliageVoileSecours;
    }

    public void setDatePliageVoileSecours(LocalDate datePliageVoileSecours) {
        this.datePliageVoileSecours = datePliageVoileSecours;
    }

    public boolean isEtat() {
        return etat;
    }

    public void setEtat(boolean etat) {
        this.etat = etat;
    }

    public Parachutiste getProprietaire() {
        return proprietaire;
    }

    public void setProprietaire(Parachutiste proprietaire) {
        this.proprietaire = proprietaire;
    }

    public Parachutiste getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Parachutiste utilisateur) {
        this.utilisateur = utilisateur;
    }

}
