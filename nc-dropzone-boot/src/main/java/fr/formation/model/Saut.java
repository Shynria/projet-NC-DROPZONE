package fr.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name = "Saut")
public class Saut {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SAUT_ID", nullable = false)
    @JsonView(Views.Commons.class)
    private int id;

    @ManyToMany
    @JoinTable(
        name = "LISTE_PARTICIPANTS",
        joinColumns = @JoinColumn(name = "ID_SAUT", referencedColumnName = "SAUT_ID"),
		inverseJoinColumns = @JoinColumn(name = "ID_MEMBRE", referencedColumnName = "MEMBRE_ID")
    )
    private List<Parachutiste> parachutistes;

    @Column(name = "ATTERRISSAGE_RATE")
    @JsonView(Views.Saut.class)
    private boolean isOutsideZone;

    @ManyToOne
    @JoinColumn(name = "SAUT_VOL_ID")
    @JsonView(Views.Vol.class)
    private Vol vol;

    @Column(name = "SAUT_HAUTEUR", nullable = false)
    @JsonView(Views.Saut.class)
    private Hauteur hauteur;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    

    public List<Parachutiste> getParachutistes() {
        return parachutistes;
    }

    public void setParachutistes(List<Parachutiste> parachutistes) {
        this.parachutistes = parachutistes;
    }

    public boolean isOutsideZone() {
        return isOutsideZone;
    }

    public void setOutsideZone(boolean isOutsideZone) {
        this.isOutsideZone = isOutsideZone;
    }

    public Vol getVol() {
        return vol;
    }

    public void setVol(Vol vol) {
        this.vol = vol;
    }

    public Hauteur getHauteur() {
        return hauteur;
    }

    public void setHauteur(Hauteur hauteur) {
        this.hauteur = hauteur;
    }

    
    
}
