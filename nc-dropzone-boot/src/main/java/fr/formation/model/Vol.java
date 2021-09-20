package fr.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vol")
public class Vol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VOL_ID")
    private int id;

    @Column(name = "VOL_ETAT_VOL")
    private EtatVol etatVol;

    @ManyToOne
    @JoinColumn(name = "VOL_AVION_ID")
    private Avion avion;

    @ManyToOne
    @JoinColumn(name = "VOL_PILOTE_ID")
    private Pilote pilote;

    @OneToMany(mappedBy = "vol")
    private List<Saut> sauts;

    @OneToOne
    @JoinColumn(name = "VOL_MEMBRE_ID")
    private Parachutiste responsableVol;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Avion getAvion() {
        return avion;
    }

    public void setAvion(Avion avion) {
        this.avion = avion;
    }

    public Pilote getPilote() {
        return pilote;
    }

    public void setPilote(Pilote pilote) {
        this.pilote = pilote;
    }

    public List<Saut> getSauts() {
        return sauts;
    }

    public void setSauts(List<Saut> sauts) {
        this.sauts = sauts;
    }

    public Parachutiste getResponsableVol() {
        return responsableVol;
    }

    public void setResponsableVol(Parachutiste responsableVol) {
        this.responsableVol = responsableVol;
    }

    
    
}
